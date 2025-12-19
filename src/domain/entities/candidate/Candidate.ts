class Candidate {
    private _id!: number;
    private _name: string;
    private _votes: number;
    private _createdAt!: Date;
    private _updatedAt!: Date;

    constructor(name: string) {
        this._name = name;
        this._votes = 0;
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

    public get votes(): number {
        return this._votes;
    }

    public set votes(votes: number) {
        this._votes = votes;
    }

    public set createdAt(createdAt: Date) {
        this._createdAt = createdAt;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public set updatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }
}

export default Candidate;
