class AppError {
    
      public readonly status: number;
                
      public readonly message: Object;
                
      constructor(status: number, error: string = "") {
                
        this.status = status;
        this.message = {
          error
        };
      }
    }
                
    export default AppError;