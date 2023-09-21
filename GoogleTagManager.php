<?php

class GoogleTagManager {

	/**
	 * Add the JavaScript module
	 *
	 * @param OutputPage &$out
	 * @param Skin &$skin
	 */
	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
		$config = $skin->getConfig();
		if ( !$config->get( 'GoogleTagManagerContainerID' ) ) {
			return;
		}
		$out->addModules( 'ext.GoogleTagManager' );
	}

	/**
	 * Pass the config to JavaScript
	 *
	 * @param array &$vars
	 * @param string $skin
	 * @param Config $config
	 */
	public static function onResourceLoaderGetConfigVars( array &$vars, $skin, Config $config ) {
		$vars['wgGoogleTagManagerContainerID'] = $config->get( 'GoogleTagManagerContainerID' );
		$vars['wgGoogleTagManagerSkipGroups'] = $config->get( 'GoogleTagManagerSkipGroups' );
	}
}
