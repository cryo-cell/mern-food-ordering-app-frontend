import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import MenuSection from "./MenuSection";

const formSchema = z.object({
    restaurantName: z.string({
        required_error: "Restaurant name is required.",
    }),
    city: z.string({
        required_error: "City name is required.",
    }),
    country: z.string({
        required_error: "Country name is required.",
    }),
    deliveryPrice: z.coerce.number({
        required_error: "Delivery price is required.",
        invalid_type_error: "Delivery price must be a number."
    }),
    estimatedDeliveryTime: z.coerce.number({
        required_error: "Delivery time is required",
        invalid_type_error: "Delivery time must be a number."

    }),
    cuisines: z.array(z.string()).nonempty({
        message: "please select at least on item",
    }),
    menuItems: z.array(z.object({
        name: z.string().min(1, "name is required"),
        price: z.coerce.number().min(1, "price is required")
    })),
    imagefile: z.instanceof(File, {message: "image is required"})

    
})

type restaurantFormData = z.infer<typeof formSchema>

/*type Props = {
  onSave: (restaurantFormData: FormData)=> void
    isLoading: boolean;
  
}*/

const ManageRestaurantForm = () => {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        cuisines: [],
        menuItems: [{name: "", price: 0}],
    }
  })

  /*const onSubmit = (formDataJson: restaurantFormData)=> {
    //convert formdatajson to a new formData object
  }*/
  return (
    <Form {...form}>
        <form 
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
        >
            <DetailsSection/>
            <Separator/>
            <MenuSection />
        </form>

    </Form>
  )
}

export default ManageRestaurantForm;