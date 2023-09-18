export interface IOnpageData {
  tasks: Task[];
}

export interface Task {
  id: string;
  status_code: number;
  status_message: string;
  time: string;
  cost: number;
  result_count: number;
  path: string[];
  data: Data;
  result: Result[];
}

export interface Data {
  api: string;
  function: string;
  target: string;
  max_crawl_pages: number;
  load_resources: boolean;
  enable_javascript: boolean;
}

export interface Result {
  crawl_progress: string;
  crawl_status: CrawlStatus;
  total_items_count: number;
  items_count: number;
  items: Item[];
}

export interface CrawlStatus {
  max_crawl_pages: number;
  pages_in_queue: number;
  pages_crawled: number;
}

export interface Item {
  resource_type: string;
  status_code: number;
  location: any;
  url: string;
  meta: Meta;
  page_timing: PageTiming;
  onpage_score: number;
  total_dom_size: number;
  custom_js_response: any;
  resource_errors: ResourceErrors;
  broken_resources: boolean;
  broken_links: boolean;
  duplicate_title: boolean;
  duplicate_description: boolean;
  duplicate_content: boolean;
  click_depth: number;
  size: number;
  encoded_size: number;
  total_transfer_size: number;
  fetch_time: string;
  cache_control: CacheControl;
  checks: Checks;
  content_encoding: string;
  media_type: string;
  server: string;
  is_resource: boolean;
  url_length: number;
  relative_url_length: number;
  last_modified: any;
}

export interface Meta {
  title: string;
  charset: number;
  follow: boolean;
  generator: any;
  htags: Htags;
  description: string;
  favicon: string;
  meta_keywords: any;
  canonical: any;
  internal_links_count: number;
  external_links_count: number;
  inbound_links_count: number;
  images_count: number;
  images_size: number;
  scripts_count: number;
  scripts_size: number;
  stylesheets_count: number;
  stylesheets_size: number;
  title_length: number;
  description_length: number;
  render_blocking_scripts_count: number;
  render_blocking_stylesheets_count: number;
  cumulative_layout_shift: number;
  meta_title: any;
  content: Content;
  deprecated_tags: any;
  duplicate_meta_tags: any;
  spell: any;
  social_media_tags: any;
}

export interface Htags {
  h1: string[];
  h2: string[];
}

export interface Content {
  plain_text_size: number;
  plain_text_rate: number;
  plain_text_word_count: number;
  automated_readability_index: number;
  coleman_liau_readability_index: number;
  dale_chall_readability_index: number;
  flesch_kincaid_readability_index: number;
  smog_readability_index: number;
  description_to_content_consistency: number;
  title_to_content_consistency: number;
  meta_keywords_to_content_consistency: any;
}

export interface PageTiming {
  time_to_interactive: number;
  dom_complete: number;
  largest_contentful_paint: number;
  first_input_delay: number;
  connection_time: number;
  time_to_secure_connection: number;
  request_sent_time: number;
  waiting_time: number;
  download_time: number;
  duration_time: number;
  fetch_start: number;
  fetch_end: number;
}

export interface ResourceErrors {
  errors: any;
  warnings: any;
}

export interface CacheControl {
  cachable: boolean;
  ttl: number;
}

export interface Checks {
  no_content_encoding: boolean;
  high_loading_time: boolean;
  is_redirect: boolean;
  is_4xx_code: boolean;
  is_5xx_code: boolean;
  is_broken: boolean;
  is_www: boolean;
  is_https: boolean;
  is_http: boolean;
  high_waiting_time: boolean;
  has_micromarkup: boolean;
  has_micromarkup_errors: boolean;
  no_doctype: boolean;
  has_html_doctype: boolean;
  canonical: boolean;
  no_encoding_meta_tag: boolean;
  no_h1_tag: boolean;
  https_to_http_links: boolean;
  size_greater_than_3mb: boolean;
  meta_charset_consistency: boolean;
  has_meta_refresh_redirect: boolean;
  has_render_blocking_resources: boolean;
  low_content_rate: boolean;
  high_content_rate: boolean;
  low_character_count: boolean;
  high_character_count: boolean;
  small_page_size: boolean;
  large_page_size: boolean;
  low_readability_rate: boolean;
  irrelevant_description: boolean;
  irrelevant_title: boolean;
  irrelevant_meta_keywords: boolean;
  title_too_long: boolean;
  has_meta_title: boolean;
  title_too_short: boolean;
  deprecated_html_tags: boolean;
  duplicate_meta_tags: boolean;
  duplicate_title_tag: boolean;
  no_image_alt: boolean;
  no_image_title: boolean;
  no_description: boolean;
  no_title: boolean;
  no_favicon: boolean;
  seo_friendly_url: boolean;
  flash: boolean;
  frame: boolean;
  lorem_ipsum: boolean;
  seo_friendly_url_characters_check: boolean;
  seo_friendly_url_dynamic_check: boolean;
  seo_friendly_url_keywords_check: boolean;
  seo_friendly_url_relative_length_check: boolean;
  recursive_canonical: boolean;
  canonical_chain: boolean;
  canonical_to_redirect: boolean;
  canonical_to_broken: boolean;
  has_links_to_redirects: boolean;
  is_orphan_page: boolean;
  is_link_relation_conflict: boolean;
  redirect_chain: boolean;
}
