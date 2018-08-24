<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'glumilino-wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'MF8&aZ7mkf#ihtel2bsb1,rU>B5@ioCwgXr;<qfuhuYGU7 znJ:O=e/HotGStjj3');
define('SECURE_AUTH_KEY',  'B{tq#Sv>=#j~YDhL hsuN.=Kt#Q,ZrEpP;tu1H{D8P7RN!diZQOCwSwicGrPX&s^');
define('LOGGED_IN_KEY',    'KK*G|EG8>(.x~sP.,2EQo|1V8{fG)m$WK8S^cPH<AS!.&Jcybr~ll_:qzqo5gO,=');
define('NONCE_KEY',        'Hxm<tC8A2Kw%wt6>y~#i[p,mW1U3uQ0Fgejw&Ju}91#izR9, _qC)r/-_N)|59>7');
define('AUTH_SALT',        '9#uQ$@Z_!~C:_;wo`O4pWmasWbbUPCJf9movqN5O (ZgmsaIYW.d$D6<MT.hs/=v');
define('SECURE_AUTH_SALT', 'K!Ok[%E1sw`Kn>IEqDe3eiB:+1Z#<t2z+_q`z.Z.(VG%gL]u[}?;jMHc0nxvL&m ');
define('LOGGED_IN_SALT',   'qB[aW*7:)#X[-G_QW~};&$Ic0&)VOrR|gz3@-Frg([2H,P($C<;]Zb3hVmx]^na*');
define('NONCE_SALT',       'FdIVW8@C75p^rN@|wlrZs4|]a#j0 sura,21LoZYFd~xFHgId4mK!aG=k IQ&ko*');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
