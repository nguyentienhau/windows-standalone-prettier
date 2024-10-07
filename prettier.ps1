#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
	# Fix case when both the Windows and Linux builds of Node
	# are installed in the same directory
	$exe=".exe"
}
$ret=0
$settings=--config "%dp0%\.prettierrc.json" --ignore-path "%dp0%\.prettierignore"
if (Test-Path "$basedir/bin/node$exe") {
	# Support pipeline input
	if ($MyInvocation.ExpectingInput) {
		$input | & "$basedir/bin/node$exe"  "$basedir/bin/prettier.cjs" $args $settings
	} else {
		& "$basedir/bin/node$exe"  "$basedir/bin/prettier.cjs" $args $settings
	}
	$ret=$LASTEXITCODE
} else {
	# Support pipeline input
	if ($MyInvocation.ExpectingInput) {
		$input | & "node$exe"  "$basedir/bin/prettier.cjs" $args $settings
	} else {
		& "node$exe"  "$basedir/bin/prettier.cjs" $args $settings
	}
	$ret=$LASTEXITCODE
}
exit $ret
