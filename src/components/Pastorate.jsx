import { Button, SocialIcons } from "../components";
import { FiArrowUpRight } from "react-icons/fi";
import { infoBg } from '../assets';

const Pastorate = () => {
     return (
          <>
               <div className="w-full">
                    <div className="mx-3 my-10 lg:m-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
                         <div className="flex flex-col h-full w-full lg:w-1/2">
                              <h2 className="uppercase font-bold text-[20px] lg:text-head font-fira">our president, <span className="text-blue-800">pastor femi salawu</span></h2>
                              <div className="flex flex-col gap-5 border-l-2 border-l-blue-800 pl-5 mt-7 lg:mt-10 font-lato">
                                   <p className="text-gray-700 text-md text-justify">Pastor Femi Salawu is a man of prayer, A Revivalist, A Discipler, A Teacher par excellence, An Apostle to Nations and a Prophet of God.</p>
                                   <p className="text-gray-700 text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore minima quisquam, et repudiandae aliquam dolorum officia fugiat nam animi vitae odit molestiae corporis nemo quam dicta. Dolore adipisci iure quia, veniam dolorem ullam, quos dolor fugiat illo dolores quam quasi architecto quaerat accusamus maiores neque! Earum error perferendis eum hic voluptatem aut corrupti cum deserunt dolore nostrum! Labore sunt nam ullam. Facere, eligendi dolor. Pariatur nisi libero minima excepturi qui dignissimos, natus tenetur animi alias illo cumque itaque nihil adipisci quis facere aut eaque ducimus voluptatum perspiciatis blanditiis ipsam harum accusamus dolor. Autem dolores minus minima! Consequatur, aut at.</p>
                                   <p className="text-gray-700 text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi ut maiores itaque fugit. Veniam, ex! Alias necessitatibus voluptatem commodi neque ipsam similique nulla numquam tempora eos quam ratione, ex doloribus ipsum perferendis harum beatae consequatur id praesentium deleniti non aspernatur? Aspernatur quia odio quisquam a neque laboriosam. Consequatur mollitia molestias iste eveniet itaque. Maiores eos, nostrum ea consequuntur reiciendis libero eius excepturi deleniti blanditiis porro, distinctio minima maxime! Modi.</p>
                                   <p className="text-gray-700 text-md text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam voluptatem quisquam dolore soluta minima consequatur dignissimos, asperiores nesciunt deserunt porro non velit facere ipsa itaque laborum minus earum! Voluptatibus, reiciendis perspiciatis! A ex, nemo sunt reiciendis quis, quae omnis, animi reprehenderit dolorum distinctio adipisci consequuntur. Voluptatum dolorum adipisci quae quam quisquam. Aliquam sunt dolorum accusamus eveniet sequi obcaecati, quisquam libero molestias suscipit nulla eos nisi quaerat officiis quas. Porro, voluptatibus, iusto id ipsa non pariatur minima temporibus at, est voluptates dolorem doloremque cumque voluptatem incidunt nostrum ad molestias. Voluptatem quibusdam tenetur laborum illo dolorem, exercitationem magni, doloremque optio ex accusantium suscipit sit quae omnis iure perspiciatis. Pariatur inventore repellendus cumque.</p>
                              </div>
                              <div className="flex flex-col gap-3 mt-5">
                                   <div className="flex flex-row gap-2 items-center">
                                        <SocialIcons color="black" size={24} className="hover:scale-110 transition" platforms={['facebook', 'twitter', 'instagram', 'tiktok']} /> - <span className="capitalize font-lato">pastor femi salawu</span>
                                   </div>
                                   <Button label="Know more" onClick={() => console.log("Clicked")} bgColor="bg-blue-800" textColor="text-white" hoverBg="bg-black" iconBg="bg-white" iconColor="text-blue-800" />
                              </div>
                         </div>
                         <div className="flex items-center w-full lg:w-1/2">
                              <img src={infoBg} alt="pastorate" className="rounded-br-[50px] max-h-svh" />
                         </div>

                    </div>
               </div>
          </>
     )
}

export default Pastorate;