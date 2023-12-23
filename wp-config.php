<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dilum' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'EH,>ZKpf B0FnItDvL! n~/ATHG2}I1+o$U:`S5SrB.nCF[cLq2F%*#BZx]Z5Rvw' );
define( 'SECURE_AUTH_KEY',  'UlKB7UUCi*U<rU4&e.DS2A(dla4 fbz1P27{gE7b/DhfCxn[VDTAdL%!Ru&B)%fn' );
define( 'LOGGED_IN_KEY',    'kC1!.x/!~NJ02.mazTVgryLLe?B3h6plIIwvF|Fb?>;+[CKZ;^a2IUA|`9h@35,D' );
define( 'NONCE_KEY',        '@-`&<=Y8^RlhatKcH!=g+zM9{`S:k?ZtU}z;*)lgmcUQ&B:%pYsypj-]Ap=6BSyr' );
define( 'AUTH_SALT',        'jcD{H3nY8Ac{*s2_<Kaa)CW,-IQ5o%C{HD*=DW4.ze EpwA,V8uqrYi[su.Wu_tp' );
define( 'SECURE_AUTH_SALT', 'SERz?Bq?pH,AjWTu#,T99}T0%v`&HFf-`_p^lgi(Iq]LgG6NobD3tmFH*ax2G`+1' );
define( 'LOGGED_IN_SALT',   ';<YiGt8oHK+1>%KFe?<[BpI%Qv8Z1F]CVH+<E~uG;/A9Qh6{?[IxT(%w(bqUf>Dk' );
define( 'NONCE_SALT',       '/a*qh.tX0Sr5!+ g^.$ZS]f?f>V%Vu%&lY$&N>z>^F7<N|i6+Li328LtR,VJ#KQy' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
