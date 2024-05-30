import { useForm } from "react-hook-form";
import Post from "../../Components/Post/Post";
import { useGetPostQuery, useSetPostMutation } from "../../redux/features/api/baseapi";

const Home = () => {
    const {
        register, handleSubmit } = useForm()


    const { data, isLoading } = useGetPostQuery();
    // const {data, isLoading}= useGetPostByIdQuery(12) << here we can pass the value as a prop into the hook and we will get it into the its origin api

    //Reminder** Query always return an object and Mutation always returns a array.
    // and into the array the first element holds its function which is passed from the baseapi.
    // but you can set the name of that fuc as you want.
    // and the second element holds actual object. SO it is recommended to destructure it from the array  directly like bellow   

    const [setPost, { data: postData }] = useSetPostMutation();

    if (isLoading) {
        return (
            <div className="text-5xl text-red-400 text-center min-h-screen flex justify-center items-center">
                Loading
            </div>
        )
    }

    console.log(postData)

    const onSubmit = (data) => {
        setPost(data);
    }

    return (
        <div>
            <h3 className="text-5xl text-red-600 text-center">Post Data Using RTK Query</h3>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg bg-gray-200 p-3 mx-auto my-6" >
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">What Is Your Task Title?</span>
                        </div>
                        <input type="text"  {...register("title")} placeholder="Type here Your Task Name" className="input input-bordered w-full bg-white " />
                    </label>
                    <label className="form-control w-full ">

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-medium">Assign To</span>
                            </div>
                            <select {...register("assignedTo")} className="input input-bordered w-full bg-white">
                                <option value="">Assign To</option>
                                <option value="Md. Al Amin Mollik">Md. Al Amin Mollik</option>
                                <option value="Tahidul Bhai">Tahidul Bhai</option>
                                <option value="Tiger Mursa Bhai">Tiger Mursa Bhai</option>
                                <option value="Zaman Bhai">Zaman Bhai</option>
                            </select>
                        </label>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Priority</span>
                        </div>
                        <select {...register("priority")} className="input input-bordered w-full bg-white">
                            <option value="">Select Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">What Is Your Task ?</span>
                        </div>
                        <textarea name='description'  {...register("description")} rows={4} className="textarea textarea-bordered bg-white"
                            placeholder="Write About your Task here..."></textarea>
                    </label>
                    <div>
                        <button type='submit' className='btn mt-5 w-full bg-[#3ac43aee] hover:bg-[#46ac46] text-white '>
                            Save Task
                        </button>
                    </div>
                </form>
            </div>
            <h3 className="text-5xl text-green-600 text-center my-4">Get Data Using RTK Query</h3>
            <div className="grid grid-cols-2 gap-5 max-w-7xl mx-auto">
                {
                    data?.map((item) =>
                        <Post item={item} key={item.id} />
                    )
                }
            </div>
        </div>
    );
};

export default Home;