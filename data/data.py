from neo4j import GraphDatabase
import dotenv
import os
import pandas as pd


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

def getConnection():
    return GetConnection(URI, "neo4j", user, password)

def flatten_matrix(matrix):
    return [item for sublist in matrix for item in sublist]

def getAllNodes():

    neo_db = getConnection()

    nodes_query = (
        """
        MATCH (n)
        RETURN *
        """
    )

    nodes = flatten_matrix(neo_db.graph_read(nodes_query))

    print("Printing all nodes in graph")
    for node in nodes:
        print(node['name'])
    
    return True

def getAllCities():

    neo_db = getConnection()

    nodes_query = (
        """
        MATCH (n:City)
        RETURN *
        """
    )

    nodes = flatten_matrix(neo_db.graph_read(nodes_query))

    print("Printing all city nodes in graph")
    for node in nodes:
        print(node['name'])
    
    return True

def getAllCitiesBelongingToState():

    neo_db = getConnection()

    nodes_query = (
        """
        MATCH (n:City)-[:IS_IN]-
        ()
        RETURN n
        """
    )

    nodes = flatten_matrix(neo_db.graph_read(nodes_query))

    print("Printing all city nodes with IS_IN relationship")
    for node in nodes:
        print(node['name'])
    
    return True
