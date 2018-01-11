let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Mike'
  };
  setInterval(() => {
    callback(user);
  }, 3000)
  
};

getUser(1, (user) => {
  console.log(user);
});