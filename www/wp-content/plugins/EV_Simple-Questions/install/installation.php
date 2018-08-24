<?PHP
$all_posts = wp_count_posts('ev_simple_questions')->publish;
$args = array('post_type' => 'ev_simple_questions', 'posts_per_page' => $all_posts);
global $All_rac;
$All_rac = new WP_Query( $args );
?>