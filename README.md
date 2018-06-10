# Data Visualization         

![image](https://user-images.githubusercontent.com/9217947/41093823-9ae4d730-6a4c-11e8-99e2-9be0dc580e07.PNG) 

3rd year Software Development project. The project uses the D3.js API to create charts from data accessed via Representational State Transfer (REST) API using AJAX POST request. The data consists of female/male population by county in Ireland from the Central Statistics Office (CSO). This data is stored on a Neo4J graph database. The user is able to select different counties in Ireland and view the population as pie/bar chart.

Languages, Technologies and Implementation Architecture used for this project:
* JavaScript, HTML/CSS, D3.js, Neo4J Database, JQuery, AJAX, Azure.

## Getting Started         

Download zip here [Data Visualization](https://github.com/seanJosephFitzpatrick/dataVisualization/archive/master.zip)               

### Prerequisites          

Neo4j. You can download here [Neo4j](https://neo4j.com/)               

### Installing          

Install Neo4j                 
[Installation](https://neo4j.com/docs/operations-manual/current/installation/)           

## Deployment           

The default.graphdb folder needs to be replaced by the default.graphdb in the downloaded zip file. You can find the location for this folder when you start Neo4j and select the "choose" button for the Database Location. Once the folder is replaced start Neo4j.              

To run the application launch the index.html by right clicking and open with firefox, google chrome. You can select from any two counties in Ireland and transition from bar chart to pie chart by clicking the pie button.                   

## Built With

* [Neo4j Community Edition 2.3.2](https://neo4j.com/) - The Database used                  


## Authors

[Sean Fitzpatrick](https://github.com/seanJosephFitzpatrick)                    

## License

[MIT](https://github.com/seanJosephFitzpatrick/dataVisualization/blob/master/LICENSE) 
