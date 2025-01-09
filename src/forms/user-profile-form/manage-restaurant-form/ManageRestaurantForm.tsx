import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

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
    /*cuisines: z.array(z.string()).nonempty({
        message: "please select at least on item",
    }),*/
    menuItems: z.array(z.object({
        name: z.string().min(1, "name is required"),
        price: z.coerce.number().min(1, "price is required")
    })),
    imageFile: z.instanceof(File, {message: "image is required"})

    
})

type restaurantFormData = z.infer<typeof formSchema>

type Props = {
  onSave: (restaurantFormData: FormData)=> void
    isLoading: boolean;
  
}

const ManageRestaurantForm = ({onSave, isLoading}: Props) => {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        menuItems: [{name: "", price: 0}],
    }
  })

  const onSubmit = (formDataJson: restaurantFormData) => {
    const formData = new FormData();

    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);

    formData.append(
      "deliveryPrice",
      (formDataJson.deliveryPrice * 100).toString()
    );
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.menuItems.forEach((menuItem: { name: string | Blob; price: number; }, index: number) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(
        `menuItems[${index}][price]`,
        (menuItem.price * 100).toString()
      );
    });

    if (formDataJson.imageFile) {
      formData.append(`imageFile`, formDataJson.imageFile);
    }

    onSave(formData);
  };
  return (
    <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
        >
            <DetailsSection/>
            <Separator/>
            <MenuSection />
            <Separator />
            <ImageSection />
            {isLoading ? <LoadingButton />: <Button type="submit">Submit</Button>}
        </form>

    </Form>
  )
}

export default ManageRestaurantForm;