$(function(){
  $('.letter').click(function(){
    $('.letter').attr('src', 'img/header_letter.png');
    $('.home').attr('src', 'img/header_home_line.png');
    $('.people').attr('src', 'img/header_people_line.png');
    $('.work').attr('src', 'img/header_work_line.png');
  });
  $('.home').click(function(){
    $('.home').attr('src', 'img/header_home.png');
    $('.letter').attr('src', 'img/header_letter_line.png');
    $('.people').attr('src', 'img/header_people_line.png');
    $('.work').attr('src', 'img/header_work_line.png');
  });
  $('.people').click(function(){
    $('.people').attr('src', 'img/header_people.png');
    $('.letter').attr('src', 'img/header_letter_line.png');
    $('.home').attr('src', 'img/header_home_line.png');
    $('.work').attr('src', 'img/header_work_line.png');
  });
  $('.work').click(function(){
    $('.work').attr('src', 'img/header_work.png');
    $('.people').attr('src', 'img/header_people_line.png');
    $('.letter').attr('src', 'img/header_letter_line.png');
    $('.home').attr('src', 'img/header_home_line.png');
  });
});