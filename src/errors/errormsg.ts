const ValidationError = 'ValidationError'
const EmailValidationError = 'EmailValidationError'
const PasswordValidationError = 'PasswordValidationError'
const PermissionError = 'PermissionError'
const DatabaseError = 'DatabaseError'
const NotFound = 'NotFound'
const BadRequest = 'BadRequest'


export const errorMsg = (error: any) => {
    switch (error) {
        case ValidationError:
            return {
                name: 'ValidationError',
                message: 'Please check your credentials'
            }         
            case EmailValidationError:
                return {
                    name: 'ValidationError',
                    message: 'Please check your e-mail'
                }   
            case PasswordValidationError:
                return {
                    name: 'PasswordValidationError',
                    message: 'Please check your password'
                }           
            case PasswordValidationError:
                return {
                    name: 'PasswordValidationError',
                    message: 'Please check your password'
                }
            case PermissionError:
                return {
                    name: 'PermissionError',
                    message: 'Unauthorized'
                }               
            case DatabaseError:
                return {
                    name: 'DatabaseError',
                    message: 'Error connecting to the database, please try again later'
                }    
            case NotFound:
                return {
                    name: 'NotFound',
                    message: 'Not Found, please check URL'
                }
            case BadRequest:
                return {
                        name: 'BadRequest',
                        message: 'Invalid input please check your input and try again'
                    }       

        
    }
}

