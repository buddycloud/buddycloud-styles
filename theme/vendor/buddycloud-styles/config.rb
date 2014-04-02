# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "dist"
sass_dir = "src"

# You can select your preferred output style here (can be overridden via the command line):
output_style = :expanded # or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# Necessary to build compressed output version
# Extracted from https://github.com/sbspk/Prepros/issues/38#issuecomment-22006447
require 'fileutils'

on_stylesheet_saved do |file|
  require 'compass'

  if file.match('.min') == nil
    Compass.add_configuration(
      {
        :css_dir => "dist",
        :sass_dir => "src",
        :output_style => :compressed
      },
      'min' #ADDING A CONFIG REQUIRES A NAME
    )
    Compass.compiler.compile('src/buddycloud-styles.scss', 'dist/buddycloud-styles.min.css')
  end
end
