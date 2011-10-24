CREATE TABLE `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `encrypted_password` varchar(128) NOT NULL DEFAULT '',
  `password_salt` varchar(255) NOT NULL DEFAULT '',
  `reset_password_token` varchar(255) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `remember_created_at` datetime DEFAULT NULL,
  `sign_in_count` int(11) DEFAULT '0',
  `current_sign_in_at` datetime DEFAULT NULL,
  `last_sign_in_at` datetime DEFAULT NULL,
  `current_sign_in_ip` varchar(255) DEFAULT NULL,
  `last_sign_in_ip` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `confirmation_token` varchar(255) DEFAULT NULL,
  `confirmed_at` datetime DEFAULT NULL,
  `confirmation_sent_at` datetime DEFAULT NULL,
  `failed_attempts` int(11) DEFAULT '0',
  `unlock_token` varchar(255) DEFAULT NULL,
  `locked_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_admins_on_email` (`email`),
  UNIQUE KEY `index_admins_on_reset_password_token` (`reset_password_token`),
  UNIQUE KEY `index_admins_on_confirmation_token` (`confirmation_token`),
  UNIQUE KEY `index_admins_on_unlock_token` (`unlock_token`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `delayed_jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `priority` int(11) DEFAULT '0',
  `attempts` int(11) DEFAULT '0',
  `handler` text COLLATE utf8_unicode_ci,
  `last_error` text COLLATE utf8_unicode_ci,
  `run_at` datetime DEFAULT NULL,
  `locked_at` datetime DEFAULT NULL,
  `failed_at` datetime DEFAULT NULL,
  `locked_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `first_started_at` datetime DEFAULT NULL,
  `last_started_at` datetime DEFAULT NULL,
  `finished_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `delayed_jobs_priority` (`priority`,`run_at`)
) ENGINE=InnoDB AUTO_INCREMENT=176 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `node_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `identifier` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `osm_key` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `osm_value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_node_types_on_osm_key_and_osm_value` (`osm_key`,`osm_value`),
  KEY `index_node_types_on_id_and_category_id` (`id`,`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `pois` (
  `osm_id` int(11) NOT NULL,
  `version` int(11) NOT NULL,
  `tags` text NOT NULL,
  `geom` point NOT NULL,
  `status` mediumint(9) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `node_type_id` int(11) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  UNIQUE KEY `index_pois_on_osm_id` (`osm_id`),
  SPATIAL KEY `index_pois_on_geom` (`geom`),
  KEY `index_pois_on_status` (`status`),
  KEY `pagination` (`osm_id`,`status`,`created_at`),
  KEY `index_pois_on_node_type_id_and_osm_id` (`node_type_id`,`osm_id`),
  KEY `index_pois_on_region_id` (`region_id`),
  FULLTEXT KEY `fulltext_index_pois_on_tags` (`tags`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `queued_nodes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `node_attributes` text COLLATE utf8_unicode_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `geom` point NOT NULL,
  PRIMARY KEY (`id`),
  SPATIAL KEY `index_queued_nodes_on_geom` (`geom`)
) ENGINE=MyISAM AUTO_INCREMENT=1172 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `regions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `grenze` polygon NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `schema_migrations` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  UNIQUE KEY `unique_schema_migrations` (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `session_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data` text COLLATE utf8_unicode_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_sessions_on_session_id` (`session_id`),
  KEY `index_sessions_on_updated_at` (`updated_at`)
) ENGINE=InnoDB AUTO_INCREMENT=1622 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `slugs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sluggable_id` int(11) DEFAULT NULL,
  `sequence` int(11) NOT NULL DEFAULT '1',
  `sluggable_type` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `scope` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_slugs_on_n_s_s_and_s` (`name`,`sluggable_type`,`sequence`,`scope`),
  KEY `index_slugs_on_sluggable_id` (`sluggable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `spatial_ref_sys` (
  `SRID` int(11) NOT NULL,
  `AUTH_NAME` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `AUTH_SRID` int(11) DEFAULT NULL,
  `SRTEXT` varchar(2048) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `tolk_locales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_tolk_locales_on_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

CREATE TABLE `tolk_phrases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=529 DEFAULT CHARSET=latin1;

CREATE TABLE `tolk_translations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phrase_id` int(11) DEFAULT NULL,
  `locale_id` int(11) DEFAULT NULL,
  `text` mediumtext,
  `previous_text` mediumtext,
  `primary_updated` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_tolk_translations_on_phrase_id_and_locale_id` (`phrase_id`,`locale_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7156 DEFAULT CHARSET=utf8;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users` varchar(255) DEFAULT NULL,
  `oauth_token` varchar(255) DEFAULT NULL,
  `oauth_secret` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL DEFAULT '',
  `encrypted_password` varchar(128) NOT NULL DEFAULT '',
  `password_salt` varchar(255) NOT NULL DEFAULT '',
  `reset_password_token` varchar(255) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `remember_created_at` datetime DEFAULT NULL,
  `sign_in_count` int(11) DEFAULT '0',
  `current_sign_in_at` datetime DEFAULT NULL,
  `last_sign_in_at` datetime DEFAULT NULL,
  `current_sign_in_ip` varchar(255) DEFAULT NULL,
  `last_sign_in_ip` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `osm_username` varchar(255) DEFAULT NULL,
  `osm_password` varchar(255) DEFAULT NULL,
  `changeset_id` int(11) DEFAULT NULL,
  `authentication_token` varchar(255) DEFAULT NULL,
  `oauth_request_token` text,
  `wants_newsletter` tinyint(1) NOT NULL DEFAULT '0',
  `confirmation_token` varchar(255) DEFAULT NULL,
  `confirmed_at` datetime DEFAULT NULL,
  `confirmation_sent_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_users_on_email` (`email`),
  UNIQUE KEY `index_users_on_reset_password_token` (`reset_password_token`),
  UNIQUE KEY `index_users_on_authentication_token` (`authentication_token`),
  KEY `index_users_on_oauth_token` (`oauth_token`),
  KEY `index_users_on_wants_newsletter` (`wants_newsletter`)
) ENGINE=InnoDB AUTO_INCREMENT=1442 DEFAULT CHARSET=latin1;

INSERT INTO schema_migrations (version) VALUES ('20100520103719');

INSERT INTO schema_migrations (version) VALUES ('20100520103729');

INSERT INTO schema_migrations (version) VALUES ('20100525074207');

INSERT INTO schema_migrations (version) VALUES ('20100527092311');

INSERT INTO schema_migrations (version) VALUES ('20100531150042');

INSERT INTO schema_migrations (version) VALUES ('20100621072958');

INSERT INTO schema_migrations (version) VALUES ('20100622123459');

INSERT INTO schema_migrations (version) VALUES ('20100825052001');

INSERT INTO schema_migrations (version) VALUES ('20100828215923');

INSERT INTO schema_migrations (version) VALUES ('20100917130426');

INSERT INTO schema_migrations (version) VALUES ('20101008093744');

INSERT INTO schema_migrations (version) VALUES ('20101009153245');

INSERT INTO schema_migrations (version) VALUES ('20101019161239');

INSERT INTO schema_migrations (version) VALUES ('20101020065129');

INSERT INTO schema_migrations (version) VALUES ('20101107090733');

INSERT INTO schema_migrations (version) VALUES ('20110107131649');

INSERT INTO schema_migrations (version) VALUES ('20110114163727');

INSERT INTO schema_migrations (version) VALUES ('20110427101005');

INSERT INTO schema_migrations (version) VALUES ('20110503081429');

INSERT INTO schema_migrations (version) VALUES ('20110503085046');

INSERT INTO schema_migrations (version) VALUES ('20110504111051');

INSERT INTO schema_migrations (version) VALUES ('20110513152131');

INSERT INTO schema_migrations (version) VALUES ('20110716131537');

INSERT INTO schema_migrations (version) VALUES ('20110716140738');

INSERT INTO schema_migrations (version) VALUES ('20110717073922');

INSERT INTO schema_migrations (version) VALUES ('20110801135556');

INSERT INTO schema_migrations (version) VALUES ('20111001183641');

INSERT INTO schema_migrations (version) VALUES ('20111011120103');

INSERT INTO schema_migrations (version) VALUES ('20111011145011');

INSERT INTO schema_migrations (version) VALUES ('20111017092328');

INSERT INTO schema_migrations (version) VALUES ('20111018102230');

INSERT INTO schema_migrations (version) VALUES ('20111024103455');