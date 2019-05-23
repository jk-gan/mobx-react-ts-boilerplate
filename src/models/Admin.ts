import { types } from "mobx-state-tree";

const Admin = types
  .model("Admin", {
    firstName: "abc",
    lastName: "efg"
  })
  .views(self => ({
    get fullname() {
      return `${self.firstName} ${self.lastName}`;
    }
  }));

export default Admin;
