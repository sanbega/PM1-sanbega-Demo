class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }

  getAllActivities = () => {
    return this.activities;
  };

  createActivity(id, title, description, imgUrl) {
    const newActivity = new Activity(id, title, description, imgUrl);
    this.activities.push(newActivity);
  }
}
const repo = new Repository();
// repo.createActivity(
//   1946,
//   "Actividad 1946",
//   " de la actividad1",
//   "https://www.elpais.com.co/resizer/w0sMf2aLHTvPmv1JdIUrQioPAz0=/fit-in/1280x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/WTF3UHVKL5A5PJEB2YXOIEZDHE.jpg"
// );
console.log("esto es tu actividad", repo.getAllActivities());
