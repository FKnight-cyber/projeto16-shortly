--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: u7cg55p8fn5e1p
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO u7cg55p8fn5e1p;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: ukxncqivwvbvnw
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text,
    "createdAt" date DEFAULT now()
);


ALTER TABLE public.sessions OWNER TO ukxncqivwvbvnw;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: ukxncqivwvbvnw
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO ukxncqivwvbvnw;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: ukxncqivwvbvnw
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "shortUrl" character varying(8) NOT NULL,
    url text NOT NULL,
    "userId" integer NOT NULL,
    "visitCount" integer DEFAULT 0,
    "createdAt" date DEFAULT now(),
    CONSTRAINT proper_url CHECK ((url ~* '^https://'::text))
);


ALTER TABLE public.urls OWNER TO ukxncqivwvbvnw;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: ukxncqivwvbvnw
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO ukxncqivwvbvnw;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: ukxncqivwvbvnw
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" date DEFAULT now()
);


ALTER TABLE public.users OWNER TO ukxncqivwvbvnw;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: ukxncqivwvbvnw
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO ukxncqivwvbvnw;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: ukxncqivwvbvnw
--

COPY public.sessions (id, "userId", token, "createdAt") FROM stdin;
1	1	3c6d8b63-abef-4c5d-9eec-9033bd6f4c5a	2022-08-04
2	1	e7aca3a5-df89-42ad-b92b-aefb9ea599dc	2022-08-04
3	1	1e2b7d84-f880-479e-a369-622cb78fdecb	2022-08-04
4	1	77a4b2e6-76ff-42e5-8f24-c2fe2107087d	2022-08-04
5	1	738248b8-4b9c-4598-b6c0-882fef7ecbc1	2022-08-04
6	1	0a78cb2e-9b15-4e81-b6de-10a2b175ce88	2022-08-04
7	1	21750fad-1766-47de-9512-d6db2ff8eac9	2022-08-04
8	1	8f4794c6-853b-4650-8747-339de049b264	2022-08-04
9	1	3afb68e2-b60c-4f36-b32e-740b882b5ff1	2022-08-04
10	1	63acf678-7b31-48e6-938c-4b204c72bc26	2022-08-04
11	1	ddc7f28a-c589-47ce-beee-9724eb272369	2022-08-04
12	1	12217bd4-4f98-4886-ae0c-4bf24e5daf9b	2022-08-04
13	1	4eac4280-8659-4df8-a7e0-269fd8452f2e	2022-08-04
14	1	438c6a4b-f0a5-4d8e-aefa-754a0ccf76ba	2022-08-04
15	1	6fa72923-f220-47dd-bacd-44f147a4e988	2022-08-04
16	1	4c92dd12-95eb-4d73-8043-adf7c3f5c74a	2022-08-04
17	1	1085016f-41cd-4612-b9b6-c14b18c0b9e7	2022-08-04
18	1	895c45e2-5ac9-47d2-a548-abbd94532991	2022-08-04
19	1	a6a4f180-2825-484a-833c-b154490e6b81	2022-08-04
20	1	5e3e49ca-ee51-4372-a17e-c08473d8e8c1	2022-08-04
21	1	6e6b873d-7d96-4d4e-92ff-5e02ddd3a5b0	2022-08-04
22	1	a15d249e-9709-4563-a0fd-4d1fa204750d	2022-08-04
23	1	f1e8a65b-0aa0-485f-9dd7-fdf00c2ae21b	2022-08-04
24	1	723a6cd4-fcfe-480c-a6a3-5d2d3e2461ce	2022-08-04
25	1	a299fa30-5dca-4549-ba81-7aaf1489c96b	2022-08-04
26	2	1df6d6f3-6ee2-4bdd-b089-ee7df842c885	2022-08-04
27	1	1a253dd7-9881-45ba-bb17-3d588bfdb553	2022-08-04
28	3	aa96aa40-0146-409b-888a-7248782a2034	2022-08-04
29	3	fdde3a24-abe7-4801-a5eb-62c85e9bc472	2022-08-04
30	1	b89ea75d-5495-44cb-90fc-2e153e8b0146	2022-08-04
31	4	f0a0d25f-e1e1-4cc4-a7d8-c031443cd92d	2022-08-04
32	8	300bc947-bb9e-4c4f-a0e8-e23afec45395	2022-08-04
33	9	e741acec-c1b3-42c0-aa45-aff5e998efa3	2022-08-04
34	9	8169074d-fbfa-4ba9-b54a-898c591cc9de	2022-08-04
35	4	5650d219-45a9-40ea-b178-f1468337a9b7	2022-08-04
36	4	ca7b4094-7f17-4663-b685-ef20976a67c1	2022-08-04
37	10	e943a1ae-c6ce-4adc-8392-b7a92d68a5ab	2022-08-04
38	11	9d1e636a-58ef-4a96-9311-c64be58f9257	2022-08-04
39	11	8a48ad2a-093f-4f7f-ab4d-a2d88742cf55	2022-08-04
40	1	37e27dec-556a-4ecf-868b-8eb5647fadbf	2022-08-05
41	1	8c3f3d27-d1e9-4e07-881f-5207bd3c84a7	2022-08-05
42	1	0f93ffc0-7f80-422b-9964-371565a0e273	2022-08-05
43	2	9fbc8f3d-04ff-47b0-a8ec-50cdd5b72059	2022-08-05
44	2	6a47e77f-3a98-4a78-8d7b-b7773fac0d06	2022-08-05
45	1	280fa72d-62d3-43a0-8833-748f4603231c	2022-08-05
46	1	a421dc66-b342-416f-ae36-9188bc50aa09	2022-08-05
47	1	72a125ca-27f7-4053-969d-f3cfac23c133	2022-08-05
48	1	18a56edc-ae8a-422b-bc59-acbb483f0a70	2022-08-05
49	1	4178bc96-1d6c-42a6-8602-5d37d2e31bf2	2022-08-05
50	12	c62fd4f7-4d98-4d2b-9c1d-f800fa5198dd	2022-08-05
51	12	891c3f09-98e0-4cb8-bf02-5ff52558600c	2022-08-05
52	12	6d5264cc-d424-4af5-a12a-b3e7c04031f3	2022-08-05
53	1	9ace32db-8b62-4694-a090-66de12d1cc6a	2022-08-05
54	1	ea612e62-1b7b-406a-9c5b-64e05320c551	2022-08-05
55	1	efa5a494-3cb0-4f07-b56b-6d15cd539789	2022-08-05
56	1	5aefc417-d467-4797-8f12-c27c6ac9afc9	2022-08-05
57	1	cc302c36-d69c-44d6-b67b-fc4f9250658e	2022-08-05
58	1	628eb938-9b6c-4073-a924-0e95c58b0166	2022-08-05
59	1	fd5ebba3-0012-434c-9f27-ec7a462342d8	2022-08-05
60	1	63dbfbfa-7ecf-445d-965d-74a6d262d6b6	2022-08-05
61	1	6b3535fe-b23a-45a1-bf4e-50bf65ca26cd	2022-08-05
62	13	93c6545f-ebbc-42ce-8d70-32888cee3020	2022-08-05
63	8	d2353347-d480-4e46-b767-9bc1fecf0a07	2022-08-05
64	3	1fbfcd00-c8c7-4621-8777-df20ec66430c	2022-08-05
65	14	949230e1-f16d-4859-9c46-d60a11951dfc	2022-08-05
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: ukxncqivwvbvnw
--

COPY public.urls (id, "shortUrl", url, "userId", "visitCount", "createdAt") FROM stdin;
85	YenfY9Pl	https://www.w3schools.com/w3css/img_lights.jpg	1	0	2022-08-05
86	4X1kgpOS	https://www.w3schools.com/w3css/img_lights.jpg	1	0	2022-08-05
87	XLjmfMGp	https://www.w3schools.com/w3css/img_lights.jpg	1	0	2022-08-05
88	46iGz0D2	https://www.w3schools.com/w3css/img_lights.jpg	1	0	2022-08-05
89	-632ngEP	https://www.w3schools.com/w3css/img_lights.jpg	1	0	2022-08-05
92	ux-dgSgd	https://i1.wp.com/images.gameswfu.net/7-memes-hilarios-de-metal-gear-rising-revengeance-62910a432455b.jpeg	13	1	2022-08-05
93	C67Sp7fl	https://youtu.be/fe1RIsL4rTE	8	0	2022-08-05
40	wH7F1xAh	https://youtu.be/YaLMzBXmJNo	8	2	2022-08-04
95	ilQ4yMKB	https://www.w3schools.com/w3css/img_lights.jpg	1	1	2022-08-05
33	v87p0IlK	https://www.w3schools.com/w3css/img_lights.jpg	2	0	2022-08-04
34	X47Zcthb	https://www.w3schools.com/w3css/img_lights.jpg	2	0	2022-08-04
35	PLDyUG2J	https://www.w3schools.com/w3css/img_lights.jpg	2	0	2022-08-04
36	VXj_oacz	https://www.w3schools.com/w3css/img_lights.jpg	2	0	2022-08-04
37	kUJ7MxrX	https://www.w3schools.com/w3css/img_lights.jpg	2	0	2022-08-04
39	O-ZedLhr	https://lastfm.freetls.fastly.net/i/u/770x0/d8bd000eb2ca27ea7987c0a807b5f420.jpg#d8bd000eb2ca27ea7987c0a807b5f420	3	0	2022-08-04
41	KC9BZ6QK	https://projeto16-shortly-nu.vercel.app/	4	0	2022-08-04
43	dAlElCo6	https://www.youtube.com/watch?v=P2BWQ8dms8Q	9	0	2022-08-04
45	ATzF_tmK	https://hub.driven.com.br/	10	0	2022-08-04
30	y6L5QUqx	https://www.w3schools.com/w3css/img_lights.jpg	2	2	2022-08-04
31	P2gfIH-l	https://www.w3schools.com/w3css/img_lights.jpg	2	1	2022-08-04
32	KjlVRUDm	https://www.w3schools.com/w3css/img_lights.jpg	2	1	2022-08-04
29	i9RpAXxW	https://www.w3schools.com/w3css/img_lights.jpg	2	6	2022-08-04
28	b9HPMGk4	https://www.w3schools.com/w3css/img_lights.jpg	1	5	2022-08-04
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: ukxncqivwvbvnw
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	Ryan	ryan@gmail.com	$2b$10$JHlRW6XPpmbedRaCm0ZqJ.6Xcl4OG/j0d7Kh9oIVV.y7qXtIYWi92	2022-08-04
2	Fulano de Tal	fulano@gmail.com	$2b$10$wbFiLWZy0311bzadmrudeOj24McHQzPo/yPGf5ACMDaHri263CJCW	2022-08-04
3	beatriz	bia@gmail.com	$2b$10$kMc0Kn2n8ZiP.kahWkP.JeLHANhU2QunUX8dr3K2DOQNTnlTChsji	2022-08-04
4	Audrey	audrey@gmail.com	$2b$10$88/NJ6sM9VKyfPBrfDxoHuEnkkkJh2uiPyBV3RW8Shx1ZskEC.oaC	2022-08-04
8	Rafa	rafa@gmail.com	$2b$10$oz4YHpjGZbirzwSwYYXT5.3.hhKaxx1MAfpO0o3Yd97xGAumKbb62	2022-08-04
9	Leozin	leoozin@gmail.com	$2b$10$kz5HM/nh5NCklz0qV5hNxupZjC42.scWk/1DjpUewrjYr0Xso6zi2	2022-08-04
10	Frango	frango@gmail.com	$2b$10$vPWtgfafzwPX1gmNWsRvc.8/LWBV6UTmcV8xBUX4JaYp6P6zAamfa	2022-08-04
11	Gracy	gracielep4@gmail.com	$2b$10$f0fNtnE9BfJtl21POMgxse1TE00bgck08lsMzO.XUhQotmMIS93mK	2022-08-04
12	dan	dan@hotmail.com	$2b$10$m9LfS7u3XDimoij/l6NWdO.2MBKmVc5DRN0yBqHpZw/zSx95iRWNy	2022-08-05
13	aa	aaa@gmail.com	$2b$10$ConVRmkJU8ZlFi1HGQRqRep.YR9kR5YQdmvNXP9MQ8VFl709sLU5C	2022-08-05
14	ave	ave@gmail.com	$2b$10$DpvSMvyajmJI3wxDIiqKVOrUPOEY89ANdC6FgTthJsxjyOOusUMfO	2022-08-05
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ukxncqivwvbvnw
--

SELECT pg_catalog.setval('public.sessions_id_seq', 65, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ukxncqivwvbvnw
--

SELECT pg_catalog.setval('public.urls_id_seq', 127, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ukxncqivwvbvnw
--

SELECT pg_catalog.setval('public.users_id_seq', 14, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ukxncqivwvbvnw
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: u7cg55p8fn5e1p
--

GRANT USAGE ON SCHEMA heroku_ext TO ukxncqivwvbvnw;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: ukxncqivwvbvnw
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO ukxncqivwvbvnw;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO ukxncqivwvbvnw;


--
-- PostgreSQL database dump complete
--

