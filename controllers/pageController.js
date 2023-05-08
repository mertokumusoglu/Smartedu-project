const User = require('../models/User');

exports.getIndexPage = (req, res) => {
  console.log(req.session.userID)
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getCoursesPage = (req, res) => {
  res.status(200).render('courses', {
    page_name: 'courses',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

exports.getDashboardPage = async (req, res) => {
  const user = await User.findOne({_id: req.session.userID});
  res.status(200).render("dashboard",{
  page_name: "dashboard",
  user});
}