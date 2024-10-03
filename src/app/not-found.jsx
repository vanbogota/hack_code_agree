import { Button } from '@/components/button';
import { Heading, Subheading } from '@/components/heading';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
ExclamationTriangleIcon;

export default function Custom404() {
  return (
    <div className="text-center">
      <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-orange-500"></ExclamationTriangleIcon>
      <Heading>Ошибка 404</Heading>
      <Subheading>Ничего не найдено</Subheading>
      <div className="mt-6">
        <Button href="/">На главную</Button>
      </div>
    </div>
  );
}
