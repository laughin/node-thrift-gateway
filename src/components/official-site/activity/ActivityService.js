import Activity from './Activity'

class ActivityService {

  async add(formBody) {
    let activity = Activity({
      title: formBody.title,
      content: formBody.content,
      date: formBody.date,
      address: formBody.address,
      sponsor: formBody.sponsor
    })
    return await activity.save()
  }

  async update(formBody) {
    let activity = await Activity.findById(formBody._id).exec()
    activity.title = formBody.title || activity.title
    activity.date = formBody.date || activity.date
    activity.content = formBody.content || activity.content
    activity.address = formBody.address || activity.address
    activity.sponsor = formBody.sponsor || activity.sponsor
    return await activity.save()
  }

  async remove(id) {
    return await Activity.findByIdAndRemove(id).exec()
  }

  async get(id) {
    return await Activity.findOne({_id: id}).exec()
  }

  async activities() {
    return await Activity.find({})
    .sort({
      'meta.createAt': -1
    })
    .exec()
  }

}

export default new ActivityService()
