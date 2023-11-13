class ProjectRequest {
   static create = {
       projectName: null,
       projectDescription: null
    };

   static update = {
       projectId: null,
       projectName: null,
       projectDescription: null,
       projectStatus: null
   }

   static read = {
     projectId: null
   }

   static addUser = {
       projectId: null,
       userIds: []
   }

   static removeUser = {
       projectId: null,
       userIds: []
   }
}

export default ProjectRequest;