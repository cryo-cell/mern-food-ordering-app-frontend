import appDownloadImage from "../assets/mern-food-ordering-app-course-resources-main/mern-food-ordering-app-course-resources-main/assets/appDownload.png"

import originalTarget from "../assets/originalTarget.png"
import ordersUnsplit from "../assets/ordersUnsplit (1).png"

const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-4xl font-bold tracking-tight text-orange-600">
                Connect with a Personal Shopping Expert today
            </h1>
            <span className="text-xl">Delivery savings are just a click away!</span>
        </div>
        <div className="grid md:grid-cols-3 gap-2">
            <div className="col-span-1 text-lg text-nowrap mx-auto ">
                Your Delivery Order
                <img src={originalTarget}/>
                <div className="flex justify-center">
                    <table className="text-left">
                        <thead><tr><th>Delivery Receipt</th></tr></thead>
                        <tbody>
                            <tr>
                                <td>Order Total</td><td>$45.55</td>
                            </tr>
                            <tr>
                                <td>Delivery Order Fee</td><td>$7.99</td>
                            </tr>
                            <tr>
                                <td>Service Fee</td><td>$1.55</td>
                            </tr>
                            <tr>
                                <td>Tip</td><td>$3.00</td>
                            </tr>
                            <tr >
                                <td>Total</td><td className="font-bold text-3xl">$58.09</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-span-1 text-left font-bold text-lg text-orange-600">
            </div>
            <div className="relative col-span-1 text-lg text-nowrap mx-auto">
                <span>Your DirectDriver Order</span>
                <img src={ordersUnsplit}/>
                <div className="flex justify-center">
                    <table className="text-left">
                        <thead><tr><th>DirectDriver Receipt</th></tr></thead>
                        <tbody>
                            <tr>
                            <td>Order Total</td><td>$34.07  </td>
                            </tr>
                            <tr>
                                <td>Small Order Fee</td><td>$7.00</td>
                            </tr>
                            <tr>
                                <td>Service Fee</td><td>$0.00</td>
                            </tr>
                            <tr>
                                <td>Tip</td><td>$3.00</td>
                            </tr>
                            <tr>
                                <td>Total</td><td className="font-bold text-3xl">$44.07</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>         
        </div>           
        <div className=" text-left font-bold text-5xl text-center">Total Savings <span className="text-orange-600">$14.02!</span></div>

        <div className="flex flex-col itmes-center justify-centergap-4 text-center">
        <div className="font-bold text-2xl tracking-tighter">
                Save Your Money!
        </div>
        <div className="font-bold text-2xl tracking-tighter">
            Support Your Local Community!
        </div>
        <div className="font-bold text-2xl tracking-tighter">
            Form Real Connections!
        </div>
        <span>
            Download the DirectDriver App to join!
        </span>
        <img src={appDownloadImage} />
        </div>
    </div>
  )
}
export default HomePage;