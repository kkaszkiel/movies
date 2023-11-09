CREATE DATABASE db;

-- use db database
\c db;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL
);

INSERT INTO movies (title, director, year) VALUES
    ('The Shawshank Redemption', 'Frank Darabont', 1994),
    ('The Godfather', 'Francis Ford Coppola', 1972),
    ('The Dark Knight', 'Christopher Nolan', 2008),
    ('Pulp Fiction', 'Quentin Tarantino', 1994),
    ('The Lord of the Rings: The Fellowship of the Ring', 'Peter Jackson', 2001),
    ('Forrest Gump', 'Robert Zemeckis', 1994),
    ('Inception', 'Christopher Nolan', 2010),
    ('Schindler''s List', 'Steven Spielberg', 1993),
    ('The Silence of the Lambs', 'Jonathan Demme', 1991),
    ('The Matrix', 'Lana Wachowski', 1999);