export function mapUserToRow(user) {
    return{
        id:user.id,
        name:user.name,
        email:user.email,
        street: user.address.street,
        phone: user.phone,
        company: user.company.name,
    };
}