interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (profile: Profile, partial: Partial<Profile>): Profile => {
    profile.name = partial.name !== undefined ? partial.name : profile.name;
    profile.age = partial.age !== undefined ? partial.age : profile.age;
    profile.email = partial.email !== undefined ? partial.email : profile.email;
    return profile;
}