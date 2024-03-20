ERROR_COLOR='\033[0;31m'
SUCCESS_COLOR='\033[0;32m'
PROCESS_COLOR='\033[1;33m'
NC_COLOR='\033[0m'

print_success() {
    echo -e "${SUCCESS_COLOR}$1${NC_COLOR}"
}

print_error() {
    echo -e "${ERROR_COLOR}$1${NC_COLOR}" 1>&2
}

print_process() {
    echo -e "${PROCESS_COLOR}$1${NC_COLOR}"
}

mail() {
  print_process "Checking for PHP installation..."

  if command -v php >/dev/null 2>&1; then
    echo "PHP is installed."

    php_version=$(php -v | head -n 1 | cut -d ' ' -f 2 | cut -d '.' -f 1)
    echo "PHP version detected: $php_version"

    if [ "$php_version" -ge 8 ]; then
      print_success "PHP version is 8 or greater. Proceeding with composer install..."

      cd mail

      composer install

      print_process "Copying mail folder into build directory..."

      cd ../

      cp -r mail build/

      print_success "Mail folder copied successfully."
    else
      print_error "PHP version is less than 8. Please upgrade PHP to proceed."
      print_error "mail script is not added in build. if you need to add those then please install php >= 8"
      exit 1
    fi
  else
    print_error "PHP is not installed. Please install PHP to proceed."
    print_error "mail script is not added in build. if you need to add those then please install php >= 8"
    exit 1
  fi
}

htaccess() {
  cd build

  echo "<IfModule mod_rewrite.c>
    RewriteEngine On
    # Redirect HTTP to HTTPS
    RewriteCond %{HTTPS} off
    RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Send all requests not pointing directly to files in the filesystem to index.html
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ index.html [L]
  </IfModule>" > .htaccess

  print_success ".htaccess file created."
}

mail
# htaccess