export class CV
{
  public constructor(
      public first_name : string = "",
      public last_name : string = "",
      public email : string = "",
      public profession : string = "",
      public phone : string = "",
      public address : string = "",
      public date_birth : string = "",
      //Education
      public trainings_diplomas = [
        {
          trainings_diplomas_name: "",
          school_name : "",
          school_localtion : "",
          field_study : "",
          start_date : "",
          end_date : "",
        }
      ],

      //Skills
      public skill: string = "",
  ){}
}
