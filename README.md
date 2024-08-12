## Cohesyve Assessment 
This project is part of the hiring process for the full-stack developer intern position at Cohesyve. The goal of this assessment is to evaluate your product building skills and your comfort with the underlying tech stack.
<br/><br/>
The provided neo4j graph contains information on 25,000 D2C companies globally along with their founders, angel investors and institutional investors. Your task is to build a web based tool that can help D2C founders identify relevant competitors and find potential investors.
<br/><br/>
You have full creative freedom on the frontend design and any additional functionality that you feel will be helpful. 
<br/><br/>
<b>The task should not take you more than 2 days to complete. Start by forking this repository and send us your submissions (link to your forked repo) by end of day on Aug 15 2024.</b> 

<br/><br/>
### 1. Requirements
Create a single page dashboard application to explore the neo4j data and extract userful information for the users. 

a. Preferred technology stack (submissions with other relevant technologies will also be evaluated):
  <br />&emsp;i. Backend: Python django
  <br />&emsp;ii. Frontend: Next.js

b. The tool has two primary users:
    <br />&emsp;i. Venture capitalists - to identify related companies and investment opportunities
    <br />&emsp;ii. Entreprenuers - to identify relevant venture capitalists, related companies and competitors

c. Tool should be interactive, allowing users to explore underlying data, such as relationships between companies and VCs.
  
d. Integrated insights to highlight key parameters like investment trends, competitor analysis, and market gaps.
  
e. The tool should require the user to submit their email before they get access to the tool
    
f. Scalable UI design from mobile to laptop screens

<br/><br/>
### 2. Starter Project
A starter django project is provided with the built in neo4j connector and sample neo4j queries (in the data/data.py file) for your reference. <b>Do not write/update/delete any data on the graph.</b>

Further information on neo4j can be obtained through the Neo4j documenation: https://neo4j.com/docs/
