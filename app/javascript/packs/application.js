import 'bootstrap';
import '../stylesheets/application';

import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

require("jquery");
require("bootstrap");

Rails.start()
ActiveStorage.start()
