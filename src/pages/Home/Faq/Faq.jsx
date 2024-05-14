

const Faq = () => {



    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container max-w-4xl px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>
                    <div className="space-y-3 mt-10">
                        <div className="collapse collapse-plus border rounded bg-gray-50">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                            How do students join study circles?
                            </div>
                            <div className="collapse-content">
                                <p>By creating or joining circles based on subjects, inviting peers to collaborate and share resources for efficient learning.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus border rounded bg-gray-50">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                            What features does it offer?
                            </div>
                            <div className="collapse-content">
                                <p>It enables assignment creation, distribution, and tracking within circles, promoting collaboration, feedback, and progress monitoring among members.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus border rounded bg-gray-50">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                            How does it encourage collaboration?
                            </div>
                            <div className="collapse-content">
                                <p>Through discussion forums, chat rooms, and file sharing, students engage in collaborative activities, supporting each other in assignment completion</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus border rounded bg-gray-50">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                            How does it ensure accountability?
                            </div>
                            <div className="collapse-content">
                                <p>By monitoring task progress, providing visibility into contributions and deadlines, ensuring accountability and transparency among study circle members.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus border rounded bg-gray-50">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                            Can students receive feedback?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, students receive peer feedback, evaluate assignments, and reflect on their learning experiences, fostering continuous improvement within study circles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;