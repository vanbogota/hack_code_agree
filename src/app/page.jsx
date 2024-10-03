import { Badge } from '@/components/badge';
import { Divider } from '@/components/divider';
import { Heading, Subheading } from '@/components/heading';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import { getPolicies } from '@/data/insurance';

export function Stat({ title, value, change }) {
  return (
    <div>
      <Divider />
      <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
      <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
      <div className="mt-3 text-sm/6 sm:text-xs/6">
        <Badge color={change.startsWith('+') ? 'lime' : 'pink'}>{change}</Badge>{' '}
        <span className="text-zinc-500">по сравнению в прошлом месяце</span>
      </div>
    </div>
  );
}

export default async function Home() {
  let products = await getPolicies();

  return (
    <>
      <div className="mt-4 flex items-end justify-between">
        <Heading>Админ-панель</Heading>
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Всего гипотез" value={products.length} change="+4.5%" />
        <Stat title="Динамика успешных гипотез" value="12" change="-0.5%" />
        <Stat title="Динамика неуспешных гипотез" value="6" change="+4.5%" />
        <Stat title="Всего подписанных договоров" value="10987" change="+21.2%" />
      </div>
      <Subheading className="mt-14">Текущие гипотезы</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>№</TableHeader>
            <TableHeader>Категория</TableHeader>
            <TableHeader>Название</TableHeader>
            <TableHeader>Описание</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(policies => (
            <TableRow key={policies.id} href={policies.url} title={`Полис #${policies.id}`}>
              <TableCell>{policies.id}</TableCell>
              <TableCell className="w-3 text-zinc-500">{policies.type}</TableCell>
              <TableCell className="w-3">{policies.policy.title}</TableCell>
              <TableCell>
                <div className="flex w-full items-center gap-2 text-wrap">
                  <span>{policies.policy.desc}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
