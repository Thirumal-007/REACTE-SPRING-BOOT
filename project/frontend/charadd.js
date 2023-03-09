import React, { useState, useEffect } from "react";
import charService from "./charService";

const Create = () => {
    const [SetValues, setValues] = useState({ id: "", name: "", born: "", age: "", series: "", written_by: "" });

    const handleInputs = (e) => {
        setValues({ ...SetValues, [e.target.name]: e.target.value });
    }

    const eventShow = (e) => {
        e.preventDefault();
        charService.saveCust(SetValues).then(res => console.log(res)).catch(err => console.log(err));
        console.log(SetValues);
    }
    return (
        <form>
            <div>
                <label>Id</label>
            </div>
            <div>
                <input name="id"
                    type="number"
                    value={SetValues.id}
                    onChange={handleInputs}
                />
            </div>

            <br></br><br></br>
            <div>
            <label>name</label>
            </div>
            <div>
            <input
                name="name"
                type="text"
                value={SetValues.name}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
             <div>
            <label>Born</label>
            </div>
            <div>
            <input
                name="born"
                type="number"
                value={SetValues.born}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
            <div>
            <label>Age</label>
            </div>
            <div>
            <input
                name="age"
                type="number"
                value={SetValues.age}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
            <div>
            <label>series</label>
            </div>
            <div>
            <input
                name="series"
                type="text"
                value={SetValues.series}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
            <div>
            <label>Written_by</label>
            </div>
            <div>
            <input
                name="written_by"
                type="text"
                value={SetValues.written_by}
                onChange={handleInputs}
            />
            </div>
            <br></br><br></br>
            <div>
            <button name="submit" type="submit" id="asd" onClick={eventShow}>
                Submit
            </button>
            </div>
            <br></br><br></br>
        </form>
    );

}
export default Create;