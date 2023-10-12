'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';

export default function Newsletter() {
  const FormSchema = z.object({
    email: z
      .string()
      .email('This is not a valid email.')
      .min(1, { message: 'This field has to be filled.' }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form className="flex flex-col items-center gap-8">
        <label className="text-5xl">Newsletter Signup</label>
        <div className="flex">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Input your email"
                    {...field}
                    className="text-Eerie-black text-2xl rounded-r-none h-16 w-72"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="ghost"
            className="text-2xl border rounded-l-none h-16"
          >
            Signup
          </Button>
        </div>
      </form>
    </Form>
  );
}
