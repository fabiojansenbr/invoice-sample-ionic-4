CREATE TABLE IF NOT EXISTS developer (
	id INT PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(50),
	skills VARCHAR(50),
	img VARCHAR(50)
);
INSERT INTO developer (id, name, skills, img) VALUES (1, 'Carlie Willox', 'Eye Tracking', 'https://robohash.org/natusprovidentvelit.jpg?size=100x100&set=set1');
INSERT INTO developer (id, name, skills, img) VALUES (2, 'Irving Server', 'OMB A-123', 'https://robohash.org/abteneturest.jpg?size=100x100&set=set1');
INSERT INTO developer (id, name, skills, img) VALUES (3, 'Paula Ellershaw', 'Urology', 'https://robohash.org/veroquiacorporis.jpg?size=100x100&set=set1');
INSERT INTO developer (id, name, skills, img) VALUES (4, 'Alvinia Emor', 'QSIG', 'https://robohash.org/velinut.jpg?size=100x100&set=set1');
INSERT INTO developer (id, name, skills, img) VALUES (5, 'Tana Raven', 'IT Infrastructure Management', 'https://robohash.org/remsittenetur.jpg?size=100x100&set=set1');
INSERT INTO developer (id, name, skills, img) VALUES (6, 'Raymund Bettis', 'Church Growth', 'https://robohash.org/estodioa.jpg?size=100x100&set=set1');
INSERT INTO developer (id, name, skills, img) VALUES (7, 'Junie Lambourne', 'Construction', 'https://robohash.org/nesciunteosprovident.jpg?size=100x100&set=set1');


CREATE TABLE IF NOT EXISTS product (
	id INT PRIMARY KEY AUTOINCREMENT,
	app_name VARCHAR(50),
	creator_ID INT
);
INSERT INTO product (id, app_name, creator_ID) VALUES (1, 'Voyatouch', 2);
INSERT INTO product (id, app_name, creator_ID) VALUES (2, 'Tresom', 2);
INSERT INTO product (id, app_name, creator_ID) VALUES (3, 'Cookley', 6);
INSERT INTO product (id, app_name, creator_ID) VALUES (4, 'Mat Lam Tam', 5);
INSERT INTO product (id, app_name, creator_ID) VALUES (5, 'Biodex', 7);
INSERT INTO product (id, app_name, creator_ID) VALUES (6, 'Hatity', 7);
INSERT INTO product (id, app_name, creator_ID) VALUES (7, 'Flowdesk', 7);
INSERT INTO product (id, app_name, creator_ID) VALUES (8, 'Y-Solowarm', 5);
INSERT INTO product (id, app_name, creator_ID) VALUES (9, 'Zontrax', 3);
INSERT INTO product (id, app_name, creator_ID) VALUES (10, 'Zontrax', 1);



CREATE TABLE IF NOT EXISTS productDB (prod_id INTEGER, prod_name TEXT, prod_quantity INTEGER, prod_rate INTEGER, date TEXT);

INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Bacitracin Zinc and Polymyxin B Sulfate', 13, 4, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Ceftriaxone Sodium', 63, 5, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Lisinopril and Hydrochlorothiazide', 77, 2, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('ADENOSINE', 29, 1, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Pulmo Tartarus 6/8', 10, 4, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('modafinil', 46, 2, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Furosemide', 28, 1, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Dextroamphetamine Saccharate, Amphetamine Aspartate, Dextroamphetamine Sulfate and Amphetamine Sulfate', 71, 2, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('CETIRIZINE HYDROCHLORIDE', 17, 1, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Amoxicillin', 54, 2, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Aluminum Zirconium Trichlorohydrex Gly', 55, 4, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('DIPHENHYDRAMINE HYDROCHLORIDE', 79, 4, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Hydrocortisone Silicone', 94, 4, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Triclosan', 39, 3, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('SODIUM MONOFLUOROPHOSPHATE', 69, 1, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Mineral oil, petrolatum, phenylephrine hcl', 67, 4, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('Acetaminophen', 37, 5, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('triazolam', 17, 5, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('METHOTREXATE SODIUM', 79, 4, Date.now());
INSERT INTO products (prod_id, prod_name, prod_quantity, prod_rate, date) VALUES ('DIMETHICONE', 11, 5, Date.now());
