# db2start && db2iupdt -j "TEXT_SEARCH,TEXT_SEARCH_Port" db2inst1 &&  db2 create database Test && db2stop

echo "CREATE DATABASE"
su - db2inst1 -c "db2 create database MYDB"
echo "CREATE TABLE"
su - db2inst1 -c "db2 connect to MYDB && db2 -stvf /var/sqldata/create_table.sql"
echo "INSERT VALUES"
su - db2inst1 -c "db2 connect to MYDB && db2 -stvf /var/sqldata/insert_values.sql"
