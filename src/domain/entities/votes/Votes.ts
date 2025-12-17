class Votes {
    private _id!: number;
    private _createdAt: string;
    private _name: string;

    constructor(name: string) {
        this._name = name;
        this._createdAt = new Date().toLocaleDateString();
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get createdAt(): string {
        return this._createdAt;
    }

    public set createdAt(createdAt: string) {
        this._name = createdAt;
    }
}

export default Votes;
