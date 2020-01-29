# db2

## Launch db2 instance

    docker-compose up


## Usefull Command

### To see the list of tables created with schemas

    db2 select tabname, tabschema, tbspace from syscat.tables   

### Connection to database

    db2 connect to testdb

### To see columns and data types of a table

    db2 describe table <schema>.<table_name>
