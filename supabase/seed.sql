-- Application data snapshot from the hosted Supabase project.
-- Supabase CLI seed files execute SQL statements, so COPY blocks are represented as INSERTs.
SET session_replication_role = replica;

INSERT INTO "public"."waypoints" ("id", "parent_id", "category", "code", "name", "created_at", "updated_at") VALUES
  ('13', '4', 'Planet', 'neptune', 'Neptune', '2024-06-22 11:50:37.568518+00', '2024-06-22 11:50:37.568518+00'),
  ('12', '4', 'Planet', 'uranus', 'Uranus', '2024-06-22 11:50:17.350672+00', '2024-06-22 11:50:17.350672+00'),
  ('15', '9', 'Satellite', 'phobos', 'Phobos', '2024-06-22 11:57:13.910863+00', '2024-06-22 11:57:13.910863+00'),
  ('16', '9', 'Satellite', 'deimos', 'Deimos', '2024-06-22 11:57:34.945519+00', '2024-06-22 11:57:34.945519+00'),
  ('17', '10', 'Satellite', 'io', 'Io', '2024-06-22 11:58:54.896513+00', '2024-06-22 11:58:54.896513+00'),
  ('18', '10', 'Satellite', 'europa', 'Europa', '2024-06-22 11:59:13.016022+00', '2024-06-22 11:59:13.016022+00'),
  ('19', '10', 'Satellite', 'ganymede', 'Ganymede', '2024-06-22 11:59:32.235285+00', '2024-06-22 11:59:32.235285+00'),
  ('20', '10', 'Satellite', 'callisto', 'Callisto', '2024-06-22 11:59:49.743643+00', '2024-06-22 11:59:49.743643+00'),
  ('21', '11', 'Satellite', 'mimas', 'Mimas', '2024-06-22 12:02:39.689789+00', '2024-06-22 12:02:39.689789+00'),
  ('22', '11', 'Satellite', 'enceladus', 'Enceladus', '2024-06-22 12:03:02.708001+00', '2024-06-22 12:03:02.708001+00'),
  ('23', '11', 'Satellite', 'tethys', 'Tethys', '2024-06-22 12:03:21.5466+00', '2024-06-22 12:03:21.5466+00'),
  ('24', '11', 'Satellite', 'dione', 'Dione', '2024-06-22 12:03:36.1127+00', '2024-06-22 12:03:36.1127+00'),
  ('25', '11', 'Satellite', 'rhea', 'Rhea', '2024-06-22 12:03:47.66611+00', '2024-06-22 12:03:47.66611+00'),
  ('26', '11', 'Satellite', 'titan', 'Titan', '2024-06-22 12:04:00.374929+00', '2024-06-22 12:04:00.374929+00'),
  ('27', '11', 'Satellite', 'iapetus', 'Iapetus', '2024-06-22 12:04:11.814826+00', '2024-06-22 12:04:11.814826+00'),
  ('28', '12', 'Satellite', 'titania', 'Titania', '2024-06-22 12:06:47.082588+00', '2024-06-22 12:06:47.082588+00'),
  ('29', '12', 'Satellite', 'oberon', 'Oberon', '2024-06-22 12:06:58.285377+00', '2024-06-22 12:06:58.285377+00'),
  ('30', '12', 'Satellite', 'umbriel', 'Umbriel', '2024-06-22 12:07:08.609953+00', '2024-06-22 12:07:08.609953+00'),
  ('31', '12', 'Satellite', 'ariel', 'Ariel', '2024-06-22 12:07:19.98708+00', '2024-06-22 12:07:19.98708+00'),
  ('32', '12', 'Satellite', 'miranda', 'Miranda', '2024-06-22 12:07:31.955068+00', '2024-06-22 12:07:31.955068+00'),
  ('33', '13', 'Satellite', 'triton', 'Triton', '2024-06-22 12:08:41.605193+00', '2024-06-22 12:08:41.605193+00'),
  ('34', '13', 'Satellite', 'proteus', 'Proteus', '2024-06-22 12:09:09.820989+00', '2024-06-22 12:09:09.820989+00'),
  ('35', '13', 'Satellite', 'nereid', 'Nereid', '2024-06-22 12:09:19.340315+00', '2024-06-22 12:09:19.340315+00'),
  ('36', '13', 'Satellite', 'larissa', 'Larissa', '2024-06-22 12:09:30.743105+00', '2024-06-22 12:09:30.743105+00'),
  ('2', '1', 'Cluster', 'virgo', 'Virgo', '2024-06-20 11:09:25.62804+00', '2024-06-20 11:09:39.662083+00'),
  ('3', '2', 'Galaxy', 'milky_way', 'Milky Way', '2024-06-20 11:09:25.62804+00', '2024-06-20 11:09:39.662083+00'),
  ('7', '4', 'Planet', 'venus', 'Venus', '2024-06-20 11:09:25.62804+00', '2024-06-20 11:09:39.662083+00'),
  ('37', '13', 'Satellite', 'despina', 'Despina', '2024-06-22 12:09:53.177508+00', '2024-06-22 12:09:53.177508+00'),
  ('39', '38', 'Satellite', 'charon', 'Charon', '2024-06-22 12:10:40.323937+00', '2024-06-22 12:10:40.323937+00'),
  ('40', '38', 'Satellite', 'styx', 'Styx', '2024-06-22 12:10:52.44849+00', '2024-06-22 12:10:52.44849+00'),
  ('41', '38', 'Satellite', 'nix', 'Nix', '2024-06-22 12:11:39.596881+00', '2024-06-22 12:11:39.596881+00'),
  ('42', '38', 'Satellite', 'kerberos', 'Kerberos', '2024-06-22 12:12:04.596125+00', '2024-06-22 12:12:04.596125+00'),
  ('43', '38', 'Satellite', 'hydra', 'Hydra', '2024-06-22 12:12:28.264798+00', '2024-06-22 12:12:28.264798+00'),
  ('14', '8', 'Satellite', 'moon', 'Moon', '2024-06-22 11:50:58.969956+00', '2024-06-22 11:50:58.969956+00'),
  ('38', '4', 'Planet', 'pluto', 'Pluto', '2024-06-22 12:10:18.779115+00', '2024-07-01 17:47:15.932915+00'),
  ('1', NULL, 'Supercluster', 'laniakea', 'Laniakea', '2024-06-20 11:09:25.62804+00', '2024-07-03 08:09:25.861869+00'),
  ('6', '4', 'Planet', 'mercury', 'Mercury', '2024-06-20 11:09:25.62804+00', '2024-07-03 12:04:21.724757+00'),
  ('5', '4', 'Star', 'sol', 'Sol', '2024-06-20 11:09:25.62804+00', '2024-07-03 12:04:28.433521+00'),
  ('11', '4', 'Planet', 'saturn', 'Saturn', '2024-06-20 11:09:25.62804+00', '2024-07-03 12:17:09.77726+00'),
  ('9', '4', 'Planet', 'mars', 'Mars', '2024-06-20 11:09:25.62804+00', '2024-07-03 13:14:57.187116+00'),
  ('10', '4', 'Planet', 'jupiter', 'Jupiter', '2024-06-20 11:09:25.62804+00', '2024-07-03 13:22:17.622741+00'),
  ('8', '4', 'Planet', 'earth', 'Earth', '2024-06-20 11:09:25.62804+00', '2024-07-03 13:33:41.488901+00'),
  ('4', '3', 'System', 'solar', 'The Solar', '2024-06-20 11:09:25.62804+00', '2024-07-04 15:42:50.603939+00'),
  ('44', '2', 'Galaxy', 'andromeda', 'Andromeda', '2024-09-26 20:46:45.745422+00', '2024-09-26 20:46:45.745422+00'),
  ('45', '3', 'System', 'alpha_centauri', 'Alpha Centauri', '2024-09-26 20:59:40.146815+00', '2024-09-26 20:59:40.146815+00'),
  ('46', '45', 'Star', 'a_centauri_a', 'Rigil Kentaurus', '2024-09-26 21:00:03.669707+00', '2024-09-26 21:00:23.647877+00'),
  ('49', '45', 'Star', 'a_centauri_b', 'Toliman', '2024-09-26 21:00:53.680623+00', '2024-09-26 21:00:53.680623+00'),
  ('50', '45', 'Star', 'a_centauri_c', 'Proxima Centauri', '2024-09-26 21:01:09.751037+00', '2024-09-26 21:01:09.751037+00'),
  ('51', '45', 'Planet', 'a_centauri_cb', ' Proxima b', '2024-09-26 21:01:51.97598+00', '2024-09-26 21:01:51.97598+00'),
  ('52', '45', 'Planet', 'a_centauri_cd', ' Proxima d', '2024-09-26 21:02:18.984917+00', '2024-09-26 21:02:18.984917+00');

INSERT INTO "public"."ext_way_atmospheres" ("id", "created_at", "updated_at", "waypoint_id", "waypoint_code", "co2_pct", "n2_pct", "o2_pct", "ar_pct", "ch4_pct", "na_pct", "h2_pct", "he_pct", "type") VALUES
  ('3', '2024-06-28 16:04:14.79525+00', '2024-07-01 10:33:33.989317+00', '7', 'venus', '96', '4', NULL, NULL, NULL, NULL, NULL, NULL, 'Thick'),
  ('4', '2024-06-28 16:04:43.141149+00', '2024-07-01 10:33:35.130447+00', '8', 'earth', NULL, '78', '21', '1', NULL, NULL, NULL, NULL, 'Thin'),
  ('10', '2024-06-28 16:26:36.93875+00', '2024-07-01 10:35:07.632885+00', '26', 'titan', NULL, '97', NULL, NULL, '2', NULL, NULL, NULL, 'Exotic'),
  ('5', '2024-06-28 16:09:49.470931+00', '2024-07-01 10:35:45.750363+00', '9', 'mars', '95', '2.7', NULL, '1.6', NULL, NULL, NULL, NULL, 'Thin'),
  ('1', '2024-06-28 16:03:30.983306+00', '2024-07-01 10:41:29.375474+00', '5', 'sol', NULL, NULL, NULL, NULL, NULL, NULL, '71', '26', 'Thin'),
  ('2', '2024-06-28 16:03:57.625453+00', '2024-07-01 10:41:53.67851+00', '6', 'mercury', NULL, NULL, '42', NULL, NULL, '22', '22', '6', 'None'),
  ('6', '2024-06-28 16:10:11.153134+00', '2024-07-01 10:42:03.977229+00', '10', 'jupiter', NULL, NULL, NULL, NULL, NULL, NULL, '89.8', '10.2', 'Thick'),
  ('7', '2024-06-28 16:10:41.523271+00', '2024-07-01 10:42:07.616367+00', '11', 'saturn', NULL, NULL, NULL, NULL, NULL, NULL, '96.3', '3.2', 'Thick'),
  ('8', '2024-06-28 16:11:21.023689+00', '2024-07-01 10:42:11.210521+00', '12', 'uranus', NULL, NULL, NULL, NULL, '2.3', NULL, '82.5', '15.2', 'Thick'),
  ('9', '2024-06-28 16:11:49.142985+00', '2024-07-01 10:42:15.55726+00', '38', 'pluto', '8', '90', NULL, NULL, '2', NULL, NULL, NULL, 'Thin');

INSERT INTO "public"."keep_alive" ("id", "created_at", "updated_at") VALUES
  ('1', '2024-08-31 16:58:14.658951+00', '2024-08-31 16:58:14.658951+00');

INSERT INTO "public"."meta_star_spectral_classes" ("id", "chromacity", "created_at", "updated_at", "temperature_min_k", "temperature_max_k", "class") VALUES
  ('1', 'Blue', '2024-06-22 15:40:44.353279+00', '2024-06-22 17:06:56.132708+00', '33000', NULL, 'O'),
  ('2', 'Bluish-White', '2024-06-22 15:42:23.689141+00', '2024-06-22 17:08:15.670559+00', '10000', '33000', 'B'),
  ('3', 'White', '2024-06-22 15:53:23.798817+00', '2024-06-22 17:08:18.895212+00', '7300', '10000', 'A'),
  ('4', 'Yellow-White', '2024-06-22 15:54:04.337859+00', '2024-06-22 17:08:21.245315+00', '6000', '7300', 'F'),
  ('5', 'Yellow', '2024-06-22 15:54:23.822975+00', '2024-06-22 17:08:24.51207+00', '5300', '6000', 'G'),
  ('6', 'Orange', '2024-06-22 15:54:54.94789+00', '2024-06-22 17:08:26.495062+00', '3900', '5300', 'K'),
  ('7', 'Red', '2024-06-22 15:55:08.798846+00', '2024-06-22 17:08:28.194086+00', '2300', '3900', 'M');

INSERT INTO "public"."prd_adventures" ("id", "waypoint_id", "price_sb", "waypoint_code", "created_at", "updated_at", "description") VALUES
  ('1', '14', '100', 'moon', '2024-06-21 15:30:14.457354+00', '2024-06-21 15:30:14.457354+00', 'Oh, our own beautiful Luna!'),
  ('3', '9', '200', 'mars', '2024-06-21 15:31:04.270171+00', '2024-06-21 15:31:04.270171+00', ''),
  ('4', '15', '300', 'phobos', '2024-06-21 15:31:29.628291+00', '2024-06-21 15:31:29.628291+00', ''),
  ('5', '38', '700', 'pluto', '2024-06-22 12:14:26.066646+00', '2024-06-22 12:14:26.066646+00', '');

INSERT INTO "public"."way_clusters" ("id", "created_at", "updated_at", "waypoint_id", "waypoint_code", "constellations") VALUES
  ('1', '2024-06-17 14:13:04.061113+00', '2024-06-17 14:13:04.061113+00', '2', 'virgo', '{Virgo,"Coma Berenices"}');

INSERT INTO "public"."way_galaxies" ("id", "created_at", "updated_at", "waypoint_code", "waypoint_id", "shape", "emissions") VALUES
  ('1', '2024-06-16 16:04:59.01278+00', '2024-06-28 13:56:35.081883+00', 'milky_way', '3', 'Spiral', 'Quiescent');

INSERT INTO "public"."way_planets" ("id", "created_at", "updated_at", "waypoint_code", "waypoint_id", "size", "composition", "surface_temp_avg_k", "day_length_h", "orbital_period_d", "gravity_n", "diameter_km", "geological_activity", "is_habitable", "wind_speed_avg_kmh", "wind_gust_max_kmh", "precipitation_level", "precipitation_types", "weather_alerts", "ext_atmosphere_id") VALUES
  ('1', '2024-06-17 19:55:08.185123+00', '2024-06-30 17:47:37.125738+00', 'mercury', '6', 'Standard', 'Rocky', '340', '1408', '88', '3.7', '4879', '{Tectonic}', 'f', '0', '0', 'None', NULL, NULL, '2'),
  ('2', '2024-06-17 19:55:38.025135+00', '2024-06-30 17:47:40.771099+00', 'venus', '7', 'Standard', 'Volcanic', '737', '5832', '225', '8.8', '12104', '{Volcanic}', 'f', '360', '724', 'Low', '{"Sulfuric Acid Rain"}', NULL, '3'),
  ('3', '2024-06-17 19:55:58.396197+00', '2024-06-30 17:47:44.534681+00', 'earth', '8', 'Standard', 'Terrestrial', '288', '24', '365', '9.8', '12756', '{Tectonic,Volcanic}', 't', '15', '407', 'Moderate', '{Rain,Snow,Hail}', NULL, '4'),
  ('4', '2024-07-24 10:29:45.757159+00', '2024-07-24 10:30:05.457612+00', 'mars', '9', 'Standard', 'Rocky', '210', '24', '687', '3.7', '6790', NULL, 't', '37', '100', 'None', NULL, NULL, '5');

INSERT INTO "public"."way_satellites" ("id", "created_at", "updated_at", "waypoint_id", "waypoint_code", "composition", "size", "diameter_km", "surface_temp_avg_k", "day_length_h", "orbital_period_d", "gravity_n", "geological_activity", "wind_speed_avg_kmh", "wind_gust_max_kmh", "precipitation_level", "precipitation_types", "weather_alerts", "ext_atmosphere_id") VALUES
  ('1', '2024-06-20 18:06:37.762299+00', '2024-06-30 15:44:41.402713+00', '14', 'moon', 'Rocky', 'Large', '3475', '400', '708.7', '27.3', '1.6', NULL, '0', '0', 'None', NULL, NULL, NULL);

INSERT INTO "public"."way_stars" ("id", "created_at", "updated_at", "waypoint_id", "waypoint_code", "spectral_class_id", "mass", "life_cycle", "ext_atmosphere_id") VALUES
  ('1', '2024-06-20 08:35:41.35067+00', '2024-06-30 17:49:28.110452+00', '5', 'sol', '5', 'Low', 'Red Giant', '1');

INSERT INTO "public"."way_superclusters" ("id", "created_at", "updated_at", "waypoint_id", "waypoint_code", "morphology") VALUES
  ('1', '2024-06-17 14:12:16.254861+00', '2024-06-20 09:37:53.568718+00', '1', 'laniakea', 'Filament');

INSERT INTO "public"."way_systems" ("id", "waypoint_code", "is_enabled", "waypoint_id", "created_at", "updated_at", "type", "is_inhabited") VALUES
  ('1', 'solar', 't', '4', '2024-06-20 08:29:31.14004+00', '2024-06-20 08:29:50.432202+00', 'Planetary', 't');

RESET session_replication_role;

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);
SELECT pg_catalog.setval('"public"."adventures_id_seq"', 5, true);
SELECT pg_catalog.setval('"public"."categories_id_seq"', 1, true);
SELECT pg_catalog.setval('"public"."clusters_id_seq"', 1, true);
SELECT pg_catalog.setval('"public"."galaxies_id_seq"', 1, true);
SELECT pg_catalog.setval('"public"."keep_alive_id_seq"', 1, true);
SELECT pg_catalog.setval('"public"."merchandise_id_seq"', 1, false);
SELECT pg_catalog.setval('"public"."meta_planet_atmosphere_compositions_id_seq"', 10, true);
SELECT pg_catalog.setval('"public"."meta_star_classes_id_seq"', 7, true);
SELECT pg_catalog.setval('"public"."nebulas_id_seq"', 1, false);
SELECT pg_catalog.setval('"public"."nodes_3_id_seq"', 52, true);
SELECT pg_catalog.setval('"public"."planets_id_seq"', 4, true);
SELECT pg_catalog.setval('"public"."satellites_id_seq"', 1, true);
SELECT pg_catalog.setval('"public"."superclusters_id_seq"', 1, true);
SELECT pg_catalog.setval('"public"."tours_id_seq"', 1, false);
SELECT pg_catalog.setval('"public"."way_stars_id_seq"', 1, true);
