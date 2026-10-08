<?php
// Exit if uninstall not called from WordPress.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    exit;
}

// List of options your plugin creates
$options = array(
    'servv_stripe_public_key',
    'servv_stripe_account_id',
    'servv_plugin_settings',
    'servv_widget_v2_settings',
    'servv_install_status',
);

// Handle multisite uninstall
if ( is_multisite() ) {
    $sites = get_sites();
    foreach ( $sites as $site ) {
        switch_to_blog( $site->blog_id );

        // Delete all plugin options for each site
        foreach ( $options as $option ) {
            delete_option( $option );
        }

        restore_current_blog();
    }
} else {
    // Single-site uninstall
    foreach ( $options as $option ) {
        delete_option( $option );
    }
}
