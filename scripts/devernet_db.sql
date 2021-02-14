CREATE DATABASE devernet;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    deleted BOOLEAN NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    instalation_id INT NULL,
    deleted BOOLEAN NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, instalation_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (instalation_id) REFERENCES instalations(id)
);

CREATE TABLE instalations (
    id SERIAL PRIMARY KEY,
    antenna_id INT NOT NULL,
    service_id INT NOT NULL,
    user_id INT NOT NULL,
    ip VARCHAR(15) NOT NULL,
    commentary VARCHAR(255) NULL,
    deleted BOOLEAN NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (antenna_id, service_id, user_id),
    FOREIGN KEY (antenna_id) REFERENCES antennas(id),
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
)

CREATE TABLE antennas (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,    
    mac VARCHAR(17) NOT NULL,
    deleted BOOLEAN NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (product_id),
    FOREIGN KEY (product_id) REFERENCES products(id)    
)

CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name: VARCHAR(50) NOT NULL,
    pay DECIMAL(3,2) NOT NULL,
    megabytes SMALLINT NOT NULL,
    description VARCHAR(255) NOT NULL,
    deleted BOOLEAN NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
)

CREATE TABLE service_payments  (
    id SERIAL PRIMARY KEY,
    client_id INT NOT NULL,
    amount DECIMAL(3,2) NOT NULL DEFAULT 0,
    pay DECIMAL(3,2) NOT NULL
    cancelled DATETIME NULL,
    payment_date DATE NOT NULL,
    due_date DATE NOT NULL,
    deleted BOOLEAN NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (client_id),
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    client_id INT NOT NULL,
    product_id INT NOT NULL,
    pay DECIMAL(3,2) NOT NULL
    amount DECIMAL(3,2) NOT NULL DEFAULT 0,
    commentary VARCHAR(255) NULL,
    cancelled DATETIME NULL,
    deleted BOOLEAN NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (client_id, product_id),
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image_urL VARCHAR(150) NOT NULL,
    cost DECIMAL(3,2) NOT NULL,
    brand_id INT NOT NULL,
    deleted BOOLEAN NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (brand_id),
    FOREIGN KEY (brand_id) REFERENCES brands(id)
);

CREATE TABLE brands (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image_urL VARCHAR(150) NOT NULL,
    deleted BOOLEAN NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE notices (
    id SERIAL PRIMARY KEY,
    title: VARCHAR(255) NOT NULL,
    textarea:  TEXT NOT NULL,
    user_id: INT NOT NULL,
    deleted BOOLEAN NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
