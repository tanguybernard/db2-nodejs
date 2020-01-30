# db2

## Install

### Up containers

    docker-compose up
    
### Launch script (just display the data from table __FRUITS.APPLE__)

    docker-compose up app   


## Usefull Command


### Connection to database

    db2 connect to testdb

### To see columns and data types of a table

    db2 describe table <schema>.<table_name>

### To retrieve values form a table

    db2 "select * from <schema>.<table>"

### To set the communication protocol for the instance

    db2set DB2COMM=TCPIP
    db2stop
    db2start

## Usefull documentation

- https://www.db2tutorial.com/
