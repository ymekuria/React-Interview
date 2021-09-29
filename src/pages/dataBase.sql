-- Setup

-- Assume DB = postgresql

-- Given the table:

CREATE TABLE something
(
    id uuid NOT NULL,
    name  CHARACTER VARYING(255) NOT NULL,
    email CHARACTER VARYING(255) NOT NULL,
    phone CHARACTER VARYING(255),
    birthday DATE,
    age INTEGER
);

-- create a trigger/function which will calculate the age on insert or modify given the birthday

CREATE OR REPLACE FUNCTION age_update_trigger_function()
    RETURNS TRIGGER
AS
$body$

BEGIN
    New.age := date_part('year', age(NEW.birthday))
    RETURN NEW;

END;

$body$

LANGUAGE 'plpgsql';

CREATE TRIGGER age_update_trigger
    BEFORE  INSERT or UPDATE
    ON something
    FOR EACH Row

    EXECUTE procedure age_insert_trigger_function();    
