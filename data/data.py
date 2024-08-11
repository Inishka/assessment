from neo4j import GraphDatabase

load_status = dotenv.load_dotenv("Neo4j-74c3bfa1-Created-2024-08-10.txt")
if load_status is False:
    raise RuntimeError('Environment variables not loaded.')

URI = os.getenv("NEO4J_URI")
user = os.getenv("NEO4J_USERNAME")
password = os.getenv("NEO4J_PASSWORD")


class GetConnection:

    def __init__(self, uri, database, user, password):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))
        self.database = database

    def close(self):
        self.driver.close()

    def batch_write(self, queries):
        with self.driver.session(database=self.database) as session:
            try:
                return session.execute_write(self.run_batch_transactions, queries)
            except Exception as e:
                print(f"Error executing write transaction: {e}")
                raise

    def graph_write(self, graphQuery, **graphArgs):
        dynamicQuery = self.add_labels(graphQuery, **graphArgs)
        with self.driver.session(database=self.database) as session:
            try:
                return session.execute_write(self.run_single_transaction, dynamicQuery, graphArgs)
            except Exception as e:
                print(f"Error executing write transaction: {e}")
                print("Error Query", dynamicQuery)
                raise
    
    def graph_read(self, graphQuery, **graphArgs):
        dynamicQuery = self.add_labels(graphQuery, **graphArgs)
        with self.driver.session(database=self.database) as session:
            return session.execute_read(self.run_single_transaction, dynamicQuery, graphArgs)
    
    def add_labels(self, graphQuery, **labels):
        for key, value in labels.items():
            graphQuery = graphQuery.replace(f"#{key}", str(value))
        return graphQuery

    @staticmethod
    def run_single_transaction(tx, graphQuery, graphArgs):
        return tx.run(graphQuery, **graphArgs).values()

    @staticmethod
    def run_batch_transactions(tx, queries):
        for query in queries:
            tx.run(query)

def getConnection(database):
    return GetConnection(URI, "neo4j", user, password)