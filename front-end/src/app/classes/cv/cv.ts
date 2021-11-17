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
          start_date : "",
          end_date : "",
        }
      ],

      //Skills
      public skill: string = "",
  ){}

  /*
  //Test Data
  {
    trainings_diplomas_name: "Formation en license professionnelle Informatique de gestion",
    school_name : "FSJES",
    school_localtion : "Martil",
    start_date : "2019",
    end_date : "2020",
  },
  {
    trainings_diplomas_name: "Formation en license professionnelle Informatique de gestion",
    school_name : "FSJES",
    school_localtion : "Martil",
    start_date : "2019",
    end_date : "2020",
  },
  {
    trainings_diplomas_name: "Formation en license professionnelle Informatique de gestion",
    school_name : "FSJES",
    school_localtion : "Martil",
    start_date : "2019",
    end_date : "2020",
  },
  */
}
