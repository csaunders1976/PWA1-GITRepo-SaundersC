/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

/*




        The Person.js file will contain the following items:
            Add the Person object to the global window object - because main.js needs it. Example: "window.Person=Person;"
        Two variables, "jobs" and "actions" which should be directly on the Person object (static variables). The jobs variable is an array of 4 or more jobs. The actions variable is also an array of some actions a person could do.
            ex: Person.jobs = ["teacher","farmer","student","pilot"];
        ex: Person.actions = ["sleeping","eating","working"];
        The Person constructor should also have four properties:
            name: The name of the person. This property is set in this constructor for the Person.
            action: This property is set in this constructor for the Person. This property states what the person is actively doing and it is one of the values in the actions array. You will randomly select one item from the Person.action array for this property (use the Math.random() method).
        job: This property is set in this constructor for the Person and is one of the values in the jobs array. You will randomly select one item from the Person.jobs array for this property(use the Math.random() method).
        row: Like the name property, this is set in this constructor.
            Main.js writes out the information for the person's name and job. You will now need to display the initial action of the person in 3rd column.
        The Person object must have an update() function added to its prototype. The purpose of this update() function, which is called from the main.js file, is to change the action of the person every so often, this is based on the interval instructions given above (approx. once every 5 seconds or so) and display that change in the HTML in column 3.
*/
