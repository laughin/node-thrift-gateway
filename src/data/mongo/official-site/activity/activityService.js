import Activity from './activityModel'

class ActivityService {

  add(activity) {
    return new Promise((resolve, reject) => {
      Activity.create({
        title: activity.title,
        content: activity.content,
        date: activity.date,
        address: activity.address,
        sponsor: activity.sponsor
      }, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }

  update(activity) {
    return new Promise((resolve, reject) => {
      Activity.findById(activity._id, (err, data) => {
        data.title = activity.title || data.title
        data.date = activity.date || data.date
        data.content = activity.content || data.content
        data.address = activity.address || data.address
        data.sponsor = activity.sponsor || data.sponsor
        data.save((err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
      })
    })
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      Activity.findByIdAndRemove(id, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }

  get(id) {
    return new Promise((resolve, reject) => {
      Activity.findOne({
        _id: id
      }, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }

  activities() {
    return new Promise((resolve, reject) => {
      Activity.find((err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
      .sort({
        'meta.createAt': -1
      })
    })
  }

}

export default new ActivityService()
