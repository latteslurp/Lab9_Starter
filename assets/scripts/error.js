export class InvalidFieldError extends Error{
    constructor(message){
        super(message);
        this.name = 'InvalidFieldError';
    }
}