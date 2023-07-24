import { useRouter } from 'next/router';
import { useGetBlogQuery } from '@/store/apis';

function CompletePost() {
	const { query } = useRouter();
	const { data: viewReportData } = useGetBlogQuery({
		id: query.id,
	});

	return (
		<div className="m-auto prose pt-36">
			<div>
				<h1 className="text-[28px] font-semibold">
					{viewReportData?.title}
				</h1>
				<p>{viewReportData?.description}</p>
			</div>
		</div>
	);
}

export default CompletePost;
