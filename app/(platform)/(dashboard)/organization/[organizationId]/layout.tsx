import { OrgControl } from '@/app/(platform)/(dashboard)/organization/[organizationId]/_components/org-control'

interface OrganizationIdLayoutProps {
	children: React.ReactNode
}
const OrganizationIdLayout = ({ children }: OrganizationIdLayoutProps) => {
	return (
		<div>
			<OrgControl />
			{children}
		</div>
	)
}

export default OrganizationIdLayout
